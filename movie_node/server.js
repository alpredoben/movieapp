const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');
const { configProto, randomId, toDateNow, getFakerUser } = require('./helper');
const moment = require('moment')

const PROTO_PATH_FILE = './proto/movie_service.proto'
const PORT = 8081

let list_directors = []
let list_users = [];

function main() {
  list_users = getFakerUser(1000000)

  const packageDefinition = protoLoader.loadSync(PROTO_PATH_FILE, configProto)
  const movieAppPackage = grpc.loadPackageDefinition(packageDefinition).movieapp

  const server = new grpc.Server()
  server.addService(movieAppPackage.Movie.service, {
    GetDirectors: (call) => {
      for (let i = 0; i < list_directors.length; i++) {
        const element = list_directors[i];
        call.write(element)
      }

      call.end()
    },
    CreateDirector: (call, callback) => {
      const req = call.request;
      const id = randomId();
      const timestamp = toDateNow();
      const data = {
        director: {
          id: id,
          director_name: req.director_name,
        },
        created_at: {
          seconds: timestamp.getSeconds(),
          nanos: timestamp.getNanos()
        },
        updated_at: {
          seconds: timestamp.getSeconds(),
          nanos: timestamp.getNanos()
        },
      }

      list_directors.push(data)
      callback(null, {id})
    },
    FindDirector: (call, callback) => {
      const director = list_directors.find(x => x.director.id == call.request.id);
      callback(null, director)      
    },
    UpdateDirector: (call, callback) => {
      const {id, director_name} = call.request

      if(list_directors.length > 0) {
        let updated = false;
        for (let i = 0; i < list_directors.length; i++) {
          if(list_directors[i].director.id == id) {
            const timestamp = toDateNow();
            list_directors[i].director.director_name = director_name
            list_directors[i].updated_at = {
              seconds: timestamp.getSeconds(),
              nanos: timestamp.getNanos()
            }
            updated = true;
            break;
          }
        }

        if(updated) {
          callback(null, {
            value: 1,
            message: `Update director ID (${id}), has successed`
          })
        }
        else {
          callback(null, {
            value: 0,
            message: `Failed to update director`
          })
        }
      }
      else {
        callback(null, {
          value: 0,
          message: 'List directors empty'
        })
      }
    },
    DeleteDirector: (call, callback) => {
      const req = call.request 
      const find_director = list_directors.find(x => x.director.id == req.id);

      if(find_director) {
        const new_data = list_directors.filter(x => x.director.id != req.id)
        list_directors = new_data;
        callback(null, {
          value: 1,
          message: `Delete director with ID (${req.id}) successfully`
        })
      }
      else {
        callback(null, {
          value: 0,
          message: `Delete director with ID (${req.id}) failed`
        })
      }

    },
    GetUsers: (call) => {
      console.log({user_length: list_users.length})
      for (let i = 0; i < list_users.length; i++) {
        const element = list_users[i];
        // console.log(`${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')} -- id:${element.id}, name: ${element.fullname}`)
        call.write(element)
      }
      call.end()
    }   
  })

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running on port ${PORT}`)
    server.start();
  })

}


main();