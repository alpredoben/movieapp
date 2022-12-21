package main

import (
	"io"
	"log"
	pb "movieapp/proto/pb"
	"net"

	"google.golang.org/grpc"
)

var list_users []*pb.CreateUserRequest

type serverUser struct {
	pb.UnimplementedMovieServer
}

// func randomId() string {
// 	return uuid.New().String()
// }

// func randomStringFromArray(data ...string) string {
// 	n := len(data)
// 	if n == 0 {
// 		return ""
// 	}

// 	return data[rand.Intn(n)]
// }

// func randomFullname() string {
// 	return randomStringFromArray(
// 		"Ariel",
// 		"Joko",
// 		"Budi",
// 		"Doni",
// 	)
// }

// func randomEmail() string {
// 	return randomStringFromArray(
// 		"Ariel@gmail.com",
// 		"Joko@gmail.com",
// 		"Budi@gmail.com",
// 		"Doni@gmail.com",
// 	)
// }

func (s *serverUser) CreateUser(stream_serv pb.Movie_CreateUserServer) error {
	log.Println("--- Start service create user ---")

	var total int32

	for {

		req, err := stream_serv.Recv()
		if err == io.EOF {
			return stream_serv.SendAndClose(&pb.TotalUserResponse{
				// TotalUser: int32(len(list_users)),
				TotalUser: int32(total),
			})
		}

		if err != nil {
			log.Printf("Receive error : %v", err.Error())
		}

		log.Printf("id: %s, name: %s", req.Id, req.Fullname)

		resp := pb.CreateUserRequest{
			Id:       req.Id,
			Fullname: req.Fullname,
			Email:    req.Email,
			Country:  req.Country,
		}

		list_users = append(list_users, &resp)

		log.Printf("Send data success")

		total++
	}
}

func main() {
	lis, err := net.Listen("tcp", ":8081")

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// create grpc server
	s := grpc.NewServer()

	pb.RegisterMovieServer(s, &serverUser{})

	log.Printf("Server running")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed run serve: %v", err)
	}
}
