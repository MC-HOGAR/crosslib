export interface ServerTimestamp {
    "_seconds": number
    "_nanoseconds": number
}

export interface EntriesDocument<T> {
    entries: T[]
}