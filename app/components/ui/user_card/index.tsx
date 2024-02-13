export type UserCardProps = {
    user: {
        xid: string
        nickname: string
    }
}

const UserCard = ({
    user: {
        xid,
        nickname
    }
}: UserCardProps) => {
    return <>xid: {xid}, nickname: {nickname}</>
}

export { UserCard }