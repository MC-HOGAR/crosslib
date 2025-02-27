import { SqlId } from '@/common/types/Core.types'
import { DateTimeString, Maybe } from '@/common/types/Base.types'
import { ILabelValuePair } from '@/common/types/UI.types'

export interface IInternalUser {
    id: SqlId
    username: string
    email: string
    fullname: string
    group: InternalUserGroup
    status: InternalUserStatus
    last_login: Maybe<DateTimeString>
    last_password_change: Maybe<DateTimeString>
    created_at: DateTimeString
}

export enum InternalUserGroupEnum {
    Root = 'root',
    Administrator = 'administrator',
    Operator = 'operator',
    Marketing = 'marketing',
    Seller = 'seller',
    User = 'user'
}

export enum InternalUserStatusEnum {
    Active = 'Active',
    Suspended = 'Suspended'
}

export enum UserTypeEnum {
    Internal = 'Internal',
    Storefront = 'Storefront'
}

export type InternalUserStatus = 'Active' | 'Suspended'

export const InternalUserStatuses = ['Active', 'Suspended']

export type InternalUserGroup = 'root' | 'administrator' | 'operator' | 'marketing' | 'seller' | 'user'

export const InternalUserGroups = ['root', 'administrator', 'operator', 'marketing', 'seller', 'vendor', 'customer', 'user', 'guest']

export type InternalUserCreateRequest = Pick<IInternalUser, 'username' | 'email' | 'fullname' | 'group'>

export enum CognitoUserAttributeNameEnum {
    Email = 'email',
    Name = 'name',
    CustomStatus = 'custom:status',
    CustomUserType = 'custom:user-type',
    CustomGroup = 'custom:group',
    EmailVerified = 'email_verified',
    Locale = 'locale'
}

/**
 * Options that are used in UI elements like select and data-table-cells.
 */
export const UserGroupOptions: ILabelValuePair<InternalUserGroupEnum>[] = [
    { label: 'Root', value: InternalUserGroupEnum.Root },
    { label: 'Administrador', value: InternalUserGroupEnum.Administrator },
    { label: 'Operador', value: InternalUserGroupEnum.Operator },
    { label: 'Marketing', value: InternalUserGroupEnum.Marketing },
    { label: 'Vendedor', value: InternalUserGroupEnum.Seller },
    { label: 'Usuario', value: InternalUserGroupEnum.User }
];

export const UserStatusOptions: ILabelValuePair<InternalUserStatusEnum>[] = [
    { label: 'Activo', value: InternalUserStatusEnum.Active },
    { label: 'Suspendido', value: InternalUserStatusEnum.Suspended }
]