import * as React from 'react';
import { IUsers } from '../../types/types';
import UserInfo from './UserInfo';

interface UserCard {
    users: IUsers[]
    value: string
    moreInfo: Function
}

 
const LetfSide:React.FC<UserCard> = ({users, value, moreInfo}) => {
    return ( 
        <section className='w-[870px] m-0 mx-auto flex flex-wrap justify-between'>
            {users
            .filter(u => u.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            .map(user => <UserInfo key={user.id} user={user} moreInfo={moreInfo} />)}
        </section>
     );
}
 
export default LetfSide;