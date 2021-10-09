import { Container,BoxContent,Content }  from './style'
import Image from 'next/image'
import bookImage from '../../../public/img/book.svg';
import UserImage from '../../../public/img/useruser.svg';
import HomeImage from '../../../public/img/home.svg';


export function Menu () {
    return( 
       <Container>
           <Content>
               <BoxContent>
                    <Image  src={HomeImage}/>
                    <p>Home</p>
               </BoxContent>
               <BoxContent>
                    <Image  src={bookImage}/>
                    <p>Libraries</p>
               </BoxContent>
               <BoxContent>
                    <Image  src={UserImage}/>
                    <p>Profile</p>
               </BoxContent>
           </Content>
       </Container> 
    )
}