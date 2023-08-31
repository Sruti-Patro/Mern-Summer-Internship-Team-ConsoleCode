
import {Image, Card,CardHeader, CardFooter,Button,Badge, Avatar} from "@nextui-org/react";

export default function App() {
  return (

    <div className="max-w-md mx-auto bg-grey rounded-xl shadow-md overflow-hidden md:max-w-5xl ">
<div className="space-y-40 pl-16 mb-12">
     <div className=" max-w-[100px] gap-0 grid-rows-2 px-8  ">
     <Card className="col-span-12 sm:col-span-4 h-[500px] w-[600px]  ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
       
        <p className="text-tiny text-white/60 uppercase font-bold text-2xl">Download the most loved fitness app</p>
        
        <small className=" text-white text-default-500 text-lg">Start your fitness journey with us. Join the cult!</small>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://images.cnbctv18.com/wp-content/uploads/2020/12/fitness-1019x573.jpg?impolicy=website&width=617&height=264"
      />
      <CardFooter>
      <div className="flex flex-wrap gap-4 items-center">
     
     
      <Badge content="" color="default" placement="bottom-right" shape="circle">
      <Avatar
        radius="md"
        size="lg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAEsCAMAAABgwwj8AAAAb1BMVEUWFhYVFRX///8AAAASEhINDQ0KCgrOzs4aGhoGBgaDg4Pl5eX5+flBQUHy8vK+vr7W1tbIyMhJSUk0NDSVlZVcXFwjIyNycnK0tLR7e3tUVFRmZmbf39+JiYlERESBgYGhoaFqamo5OTmsrKwqKiokkInqAAAElklEQVR4nO2dC1MiMRCEyU6WNwio+FbU+/+/8VgIiqeyA2k2O7n+qrwCzlrb6U5myHJ1nc7vOBe+9h66A99PGiKY8sWYvacdxdPmjNz9/Nqnh7/x4+W936PVmBFKLKBaKE71tBGh/249v//N708JIYQQQkiGcNAjbYcZ/W8xY70ZoQSNGevNCCVoaD1pO8woIYQQQgghhBBCCCGEEEIIIYQQQgj5GVeRWkQdG4EWlAahrf/AzvafgK//bH1FKyw4b8b6jhnrzQitsJFR12FGoWwLakBoBTMKhC0UDsc8MMwoHCvWm2qhNoRWnCej4CueqYV6EfHQK57FeieDu/l4UQIveZYxz8twWhTFfRd3yS3gjJa+V1RcQr3HZ9S70UbnWKBpgmfUyWyjs5gL6Ip710ZaL1dbncUDVih6zPPdoHMGdR7f6z8KuhhgLhiAZ1Qetzqf8AmFOu/kXDox1ruy2y2rK/jLSuboXpwvu4MSGFOE9V2RyfX1c9Xe/bKY9u6kerjYvgTb9qKFlnJ/Md3s8L2XUmRZqew/zcabl+YPAmykURmVZa/4ZD6c9Ccv871XHieYuMa2ULkp6niC2B9nvZOnWp1FsUIojRvzFPVEblYnZ7S8VOm87QMGvqiM7galwwwRb0qiWqg8NOl753TrZV4vs+iBtvyIMc/3xwqhE9CGH9HrBxrne7AFf3pGP0bPQwyRY9SJGZVbjfOoN/cR1qvWEuy8JMZ6zS7ahjFPJbSDPIU4NaMa669R7/EiWqhqMa1Qqz7G+pVC6AgV0ogxTzfjvQI30hMzWr5phI5AG1RERp2MNEpvMe9Eosa8C43Q4l1g3enUMe9VJbTo/QEUNeY0z8tUp3T8Hn8GF3Wko9pJK+I3qbjTPN26X3OHOoQ49aRE1UUxu37caV53oRJ6Ayho5CGZaoeCnJJHCvVLhdA31IFezGmeDGt1XkFWUuxpnpNejU7Q7ZHog1zvD+/64yWmgcbftJXng0Lv0495H0qvv1Rw+uX8BHb/DnHTVhY792fDy67I8mG3aU1h9cTcEBvI1Xo0nd5ORErvnBfpr9YvjFYCvh8afUPMyYbPZeO3LwDfK8Nu2n67AvjzNOibtueCn82DY8V6Ox95MyO0wkZGAS20EcxYHz/mNQgzCoQtFA5szDs3Vno9Mwqn9QJ3HCvUbb/c58O9V5v9v5IP812o+/1pOlKXKeBqN6qWCNVgxHoziyl1mQK5ZdR9TeJPTzupf6eWVLS+FhSKhxk9BjPWa0wz0pnM9PrUZQrk1kItWG9mMaUuUyC3jLKFqsmohbZEqAZm9BjMWM8xr3lSlymQWwu1YL2ZxZS6TIHcMsoWqiajFtoSoRqY0WMwYz3HvOZJXaZAbi3UgvVmFlPqMgVyyyhbqJqMWmhLhGpgRo/BjPUc85ondZkCubVQC9abWUypyxTILaNsoWoyaqEtEaqBGT0GM9ZzzGue1GUK5NZCLVhvZjGlLlMgt4yyharJqIW2RKgGZvQYzFjPMa95UpcpkFsLtWC9mcWUukyB3DLKFqomoxbaEqEamNFjMGM9x7zmSfXT/wJZPx3pXNSLYgAAAABJRU5ErkJggg=="
      />
    </Badge>
     
      <Button color="primary">
       Download on the app store
      </Button>  
      

      <Badge content="" color="default" placement="bottom-right" shape="circle">
      <Avatar
        radius="md"
        size="lg"
        src="data:image/png;base64,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"
      />
    </Badge>
     
      <Button color="secondary">
       Get it on google play
      </Button>  
      </div>
      </CardFooter>

       </Card>

       </div>  
       <div className="space-y-40 pl-0 mb-5 ">
       <h1 className="text-white font-xlarge text-7xl ">JOIN THE CULT FAMILY...</h1>
       </div>



       <div className=" flex w-fullflex-row gap-3  m-0 pl-0">

<Card className="col-span-12 sm:col-span-4 h-[240px] w-[400px]">
<Image
isZoomed
width={400}
alt="NextUI Fruit Image with Zoom"
 src="https://www.freshersnow.com/wp-content/uploads/2023/06/Cult.-fit-Careers.webp"
/>
<div className="flex flex-wrap gap-4 items-center pl-36">

<Button color="primary" variant="light">
        Learn more
      </Button>  
    </div>
</Card>

<Card className="col-span-12 sm:col-span-4 h-[240px] w-[400px]">
<Image
isZoomed
width={400}
alt="NextUI Fruit Image with Zoom"
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_gCrFUPRBW-ylfZ6kkZxMXpvRjNsI9jqrg&usqp=CAU"
/>
<div className="flex flex-wrap gap-4 items-center pl-36">

<Button color="primary" variant="light">
        Learn more
      </Button>  
    </div>
</Card>

</div>
<div className="">
<div className="text-4xl text-pink-200 pr-80 italic animate-bounce ">At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.
</div> 
<div className="text-4xl text-pink-200 pr-80 itali animate-bounce ">#Be Better every day
</div> 
</div>
<Image
      isBlurred
   style={{
      margin:"auto",
       width:"100%",
       top:"50%",
       padding:"80px",
       

     }}
  
       src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
      alt="NextUI Album Cover"
  
      classNames="m-5"

    />
    </div>
   </div>
       
  );
}
