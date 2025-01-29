import { Maybe } from './Base.types'

/** Id from MySQL */
export type SqlId = number;

/** Id from DynamoDB*/
export type DynId = string;

/** Id from Aikon ERP */
export type AikonCode = string;

/** Represents any image in the system */
export interface IImage {
    url: string;
    alt: Maybe<string>;
}

export interface IBucketFile {
    bucket_name: string // The name of the S3 bucket where the file is stored.
    object_key: string // The full path or key of the object in the bucket
}

export interface IImageBucketFile extends IBucketFile {}