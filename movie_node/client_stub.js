const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');
const { configProto, getDifferenceTime } = require('./helper');

const PROTO_PATH_FILE = './proto/movie_service.proto'
const PORT = 8081

function runClient() {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH_FILE, configProto)
  const movieAppPackage = grpc.loadPackageDefinition(packageDefinition).movieapp
  const clientStub = new movieAppPackage.Movie(`localhost:${PORT}`, grpc.credentials.createInsecure())

  // clientStub.CreateDirector({director_name: "Neymar"}, (err, response) => {
  //   if(err) {
  //     console.log("Error create director", err)
  //   }
  //   else {
  //     console.log("Response create director", JSON.stringify(response))
  //   }
  // })

  readUserStream(clientStub)

}

runClient();


function readUserStream(client) {
  let call = client.GetUsers({});

  const lastDate = new Date(Date.now())

  call.on('data', (response) => {
    console.log(response)
  })

  call.on('end', () => {
    const currentDate = new Date(Date.now())
    console.log('List user selesai dikirim')
    console.log(`Last Date : ${lastDate}, Current Date: ${currentDate}`)
  })
}