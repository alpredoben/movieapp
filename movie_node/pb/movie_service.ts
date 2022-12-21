import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MovieClient as _movieapp_MovieClient, MovieDefinition as _movieapp_MovieDefinition } from './movieapp/Movie';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  movieapp: {
    Director: MessageTypeDefinition
    DirectorId: MessageTypeDefinition
    DirectorName: MessageTypeDefinition
    DirectorSub: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Movie: SubtypeConstructor<typeof grpc.Client, _movieapp_MovieClient> & { service: _movieapp_MovieDefinition }
    Status: MessageTypeDefinition
    User: MessageTypeDefinition
  }
}

