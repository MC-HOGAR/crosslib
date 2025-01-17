import { IInternalUser } from "./InternalUser.types"

export type GetAllInternalUsersResData = IInternalUser[]

export type UpdateInternalUserReqPayload = Pick<IInternalUser, "id" | "group" | "status">

export interface UpdateInternalUserMetadataQueryStringParameters {
    lastLogin?: "true"
    lastPasswordChange?: "true"
}
