import { IUsers } from "../../types/types";

interface IUser{
    user: IUsers
    moreInfo: Function
}

const UserInfo: React.FC<IUser> = ({user, moreInfo}) => {

    

    return(
        <div className='w-[420px] h-[300px] rounded-[40px] p-[50px] bg-[#333348] mb-[15px]'>
                <div className='w-[248px] h-[220px] my-0 mx-auto overflow-hidden flex flex-col items-center'>
                    <p className='mb-2'>{user.name}</p>
                    <p className='mb-2'>{user.email}</p>
                    <p className='mb-2'>{user.username}</p>
                    <a href='${user.phone}' className='mb-2'>{user.phone}</a>
                    <p className='mb-[30px]'>{user.address.city}</p>
                    <button onClick={()=>{moreInfo(user.id)}} className='bg-[#52519D] rounded-[40px] px-7 py-2'>More Info</button>
                </div>
            </div>
    )    
}

export default UserInfo;