// Original file: proto/movie_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Director as _movieapp_Director, Director__Output as _movieapp_Director__Output } from '../movieapp/Director';
import type { DirectorId as _movieapp_DirectorId, DirectorId__Output as _movieapp_DirectorId__Output } from '../movieapp/DirectorId';
import type { DirectorName as _movieapp_DirectorName, DirectorName__Output as _movieapp_DirectorName__Output } from '../movieapp/DirectorName';
import type { DirectorSub as _movieapp_DirectorSub, DirectorSub__Output as _movieapp_DirectorSub__Output } from '../movieapp/DirectorSub';
import type { Empty as _movieapp_Empty, Empty__Output as _movieapp_Empty__Output } from '../movieapp/Empty';
import type { Status as _movieapp_Status, Status__Output as _movieapp_Status__Output } from '../movieapp/Status';
import type { User as _movieapp_User, User__Output as _movieapp_User__Output } from '../movieapp/User';

export interface MovieClient extends grpc.Client {
  CreateDirector(argument: _movieapp_DirectorName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  CreateDirector(argument: _movieapp_DirectorName, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  CreateDirector(argument: _movieapp_DirectorName, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  CreateDirector(argument: _movieapp_DirectorName, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  createDirector(argument: _movieapp_DirectorName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  createDirector(argument: _movieapp_DirectorName, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  createDirector(argument: _movieapp_DirectorName, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  createDirector(argument: _movieapp_DirectorName, callback: grpc.requestCallback<_movieapp_DirectorId__Output>): grpc.ClientUnaryCall;
  
  DeleteDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  DeleteDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  DeleteDirector(argument: _movieapp_DirectorId, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  DeleteDirector(argument: _movieapp_DirectorId, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  deleteDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  deleteDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  deleteDirector(argument: _movieapp_DirectorId, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  deleteDirector(argument: _movieapp_DirectorId, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  
  FindDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  FindDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  FindDirector(argument: _movieapp_DirectorId, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  FindDirector(argument: _movieapp_DirectorId, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  findDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  findDirector(argument: _movieapp_DirectorId, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  findDirector(argument: _movieapp_DirectorId, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  findDirector(argument: _movieapp_DirectorId, callback: grpc.requestCallback<_movieapp_Director__Output>): grpc.ClientUnaryCall;
  
  GetDirectors(argument: _movieapp_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_Director__Output>;
  GetDirectors(argument: _movieapp_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_Director__Output>;
  getDirectors(argument: _movieapp_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_Director__Output>;
  getDirectors(argument: _movieapp_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_Director__Output>;
  
  GetUsers(argument: _movieapp_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_User__Output>;
  GetUsers(argument: _movieapp_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_User__Output>;
  getUsers(argument: _movieapp_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_User__Output>;
  getUsers(argument: _movieapp_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_movieapp_User__Output>;
  
  UpdateDirector(argument: _movieapp_DirectorSub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  UpdateDirector(argument: _movieapp_DirectorSub, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  UpdateDirector(argument: _movieapp_DirectorSub, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  UpdateDirector(argument: _movieapp_DirectorSub, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  updateDirector(argument: _movieapp_DirectorSub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  updateDirector(argument: _movieapp_DirectorSub, metadata: grpc.Metadata, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  updateDirector(argument: _movieapp_DirectorSub, options: grpc.CallOptions, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  updateDirector(argument: _movieapp_DirectorSub, callback: grpc.requestCallback<_movieapp_Status__Output>): grpc.ClientUnaryCall;
  
}

export interface MovieHandlers extends grpc.UntypedServiceImplementation {
  CreateDirector: grpc.handleUnaryCall<_movieapp_DirectorName__Output, _movieapp_DirectorId>;
  
  DeleteDirector: grpc.handleUnaryCall<_movieapp_DirectorId__Output, _movieapp_Status>;
  
  FindDirector: grpc.handleUnaryCall<_movieapp_DirectorId__Output, _movieapp_Director>;
  
  GetDirectors: grpc.handleServerStreamingCall<_movieapp_Empty__Output, _movieapp_Director>;
  
  GetUsers: grpc.handleServerStreamingCall<_movieapp_Empty__Output, _movieapp_User>;
  
  UpdateDirector: grpc.handleUnaryCall<_movieapp_DirectorSub__Output, _movieapp_Status>;
  
}

export interface MovieDefinition extends grpc.ServiceDefinition {
  CreateDirector: MethodDefinition<_movieapp_DirectorName, _movieapp_DirectorId, _movieapp_DirectorName__Output, _movieapp_DirectorId__Output>
  DeleteDirector: MethodDefinition<_movieapp_DirectorId, _movieapp_Status, _movieapp_DirectorId__Output, _movieapp_Status__Output>
  FindDirector: MethodDefinition<_movieapp_DirectorId, _movieapp_Director, _movieapp_DirectorId__Output, _movieapp_Director__Output>
  GetDirectors: MethodDefinition<_movieapp_Empty, _movieapp_Director, _movieapp_Empty__Output, _movieapp_Director__Output>
  GetUsers: MethodDefinition<_movieapp_Empty, _movieapp_User, _movieapp_Empty__Output, _movieapp_User__Output>
  UpdateDirector: MethodDefinition<_movieapp_DirectorSub, _movieapp_Status, _movieapp_DirectorSub__Output, _movieapp_Status__Output>
}
