import { IInternalUser } from "./InternalUser.types"

export type GetAllInternalUsersResData = IInternalUser[]

export type UpdateInternalUserReqPayload = Pick<IInternalUser, "group" | "status">

export interface UpdateInternalUserMetadataQueryStringParameters {
    lastLogin?: "true"
    lastPasswordChange?: "true"
}
