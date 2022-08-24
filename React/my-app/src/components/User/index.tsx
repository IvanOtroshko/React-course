import style from './style.module.css'

interface Props {
    UserName: string;

}

export function UserCard(props: Props)  {

    const fullName = props.UserName.split(' ');
    const  firstLastName = fullName[0][0].concat(fullName[1][0]);

    return ( 
        <div className={style.conteiner}>
            <div className={style.userFL}>{firstLastName}</div>
            <div className={style.user}>{props.UserName}</div>
        </div>
        )
}