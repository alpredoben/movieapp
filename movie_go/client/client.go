package main

import (
	"context"
	"io"
	"log"
	"movieapp/proto/pb"

	"google.golang.org/grpc"
)

const (
	address = "localhost:8081"
)

var users []*pb.User

func main() {

	connection, err := grpc.Dial(address, grpc.WithInsecure())

	if err != nil {
		log.Fatalf("Dial connection failed %v", err)
	}
	defer connection.Close()

	client := pb.NewMovieClient(connection)

	runGetUsers(client)
}

func runGetUsers(client pb.MovieClient) {
	// secondTime := time.Second * 100

	// ctx, cancel := context.WithTimeout(context.Background(), secondTime)
	// defer cancel()

	ctx := context.Background()

	req := &pb.Empty{}

	stream, err := client.GetUsers(ctx, req)

	if err != nil {
		log.Fatalf("Failed to execute method Get Users : %v", err.Error())
	}

	log.Println("Array of user")

	for {
		row_data, err := stream.Recv()
		if err == io.EOF {
			break
		}

		if err != nil {
			// log.Printf("Second Time : %v", secondTime)
			// log.Printf("Total Row : %d", len(users))
			log.Fatalf("Failed to receive stream user : %v", err.Error())
		}

		// log.Printf("id: %s, name: %s", row_data.Id, row_data.Fullname)
		users = append(users, row_data)
	}

	log.Print(users)

}
