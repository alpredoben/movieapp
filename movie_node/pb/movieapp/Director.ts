// Original file: proto/director_msg.proto

import type { DirectorSub as _movieapp_DirectorSub, DirectorSub__Output as _movieapp_DirectorSub__Output } from '../movieapp/DirectorSub';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Director {
  'director'?: (_movieapp_DirectorSub | null);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Director__Output {
  'director'?: (_movieapp_DirectorSub__Output);
  'createdAt'?: (_google_protobuf_Timestamp__Output);
  'updatedAt'?: (_google_protobuf_Timestamp__Output);
}
