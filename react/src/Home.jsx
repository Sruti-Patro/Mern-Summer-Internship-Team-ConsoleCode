import {Image,Button,Card, CardHeader, CardBody,} from "@nextui-org/react"

function Home() {
 
    return(
       
<div className="max-w-md mx-auto bg-grey rounded-xl shadow-md overflow-hidden md:max-w-6xl ">
      <div>

      <Image
      isBlurred
   style={{
      margin:"auto",
       width:"60%",
       top:"50%",
       padding:"80px",

     }}
  
       src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
      alt="NextUI Album Cover"
  
      classNames="m-5"

    />
   <h4 className="text-white font-bold text-large m-20 text-centre">A fitness movement that is worth breaking a sweat for</h4> 

<div className="space-y-16 pl-96">
    <div className="  flex gap-4 items-center m-20 text-centre ">
    <Button size="lg ">
      EXPLORE CULTPASS
      </Button>  
    </div>
    </div>

    
    <div className="flex w-full flex-row">
    <div className="max-w-[900px] gap-0  grid-rows-2 px-20">
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">cultpass</p>
        <h4 className="text-white font-medium text-large ">ELITE</h4>
        <small className=" text-white text-default-500">unlimited access to all group classses,all gyms and at-home workouts</small>
      </CardHeader>
      <Image
       isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVfX25Xs1mTAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
      />
       </Card>
       </div>

       <div className="max-w-[900px] gap-0 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">cultpass</p>
        <h4 className="text-white font-medium text-large ">PRO</h4>
        <small className=" text-white text-default-500">unlimited access to all PRO gyms and at-home workouts</small>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVfX25Xs1mTAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
      />
       </Card>
       </div>
      

       
       <div className=" max-w-[900px] gap-0  grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">cultpass</p>
        <h4 className="text-white font-medium text-large ">HOME</h4>
        <small className=" text-white text-default-500">unlimited access to at-home workouts with calorie tracking</small>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVfX25Xs1mTAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
      />
       </Card>
       </div>
</div>


    

    
<div className=" flex w-fullflex-row gap-8 px-8 m-10">

       <Card className="col-span-12 sm:col-span-4 h-[500px] w-[400px]">
      
       <Image
      isZoomed
      width={400}
      alt="NextUI Fruit Image with Zoom"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
      />
     <CardBody className="overflow-visible py-2 ">
      <h4 className="text-white font-bold text-large">unlimited access to</h4>

<small className="text-default-500"><ul>
  <li>At-center group classes
</li>

  <li>
All ELITE & PRO gyms</li>
<li>At-home live workouts</li>
</ul></small>

<div className="flex flex-wrap gap-4 items-center">
  
      <Button color="primary">
      TRY FOR FREE
      </Button>  
      <Button color="secondary">
       LEARN MORE
      </Button>  
      </div>
     
</CardBody>
       </Card>
 


       <Card className="col-span-12 sm:col-span-4 h-[500px] w-[400px]">
      
       <Image
      isZoomed
      width={400}
      alt="NextUI Fruit Image with Zoom"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
      />
     <CardBody className="overflow-visible py-2">
      <h4 className="text-white font-bold text-large">unlimited access to</h4>

<small className="text-default-500"><ul>
  <li>All PRO gyms
</li>
  <li>
  2 Sessions/month at ELITE gyms & group classes
</li>
<li>
At-home live workouts</li>
</ul></small>

<div className="flex flex-wrap gap-4 items-center">
  
      <Button color="primary">
      TRY FOR FREE
      </Button>  
      <Button color="secondary">
       LEARN MORE
      </Button>  
      </div>
     
</CardBody>
       </Card>

       <Card className="col-span-12 sm:col-span-4 h-[500px] w-[400px]">
      
       <Image
      isZoomed
      width={400}
      alt="NextUI Fruit Image with Zoom"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
      />
     <CardBody className="overflow-visible py-2">
      <h4 className="text-white font-bold text-large">unlimited access to</h4>

<small className="text-default-500"><ul>
  <li>At home workouts
</li>

  <li>
celebrity workouts</li>
<li>Goal-based Workouts and Meditation Sessions</li>
</ul></small>

<div className="flex flex-wrap flex w-full gap-4 items-center ">
  
      <Button color="primary">
      TRY FOR FREE
      </Button>  
      <Button color="secondary">
       LEARN MORE
      </Button>  
      </div>
     
</CardBody>
       </Card>
 

</div>



   
<div className="space-y-16 pl-4 animate-bounce ">
<div className=" flex-row m-40 p-20px items-centre">
    <div className="max-w-[900px] gap-2 grid grid-cols-11 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">CULT TRANSFORM</p>
        <h4 className="text-white font-medium text-large ">get coached to lose weight for good</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover grid-rows-2 "
        src="data:image/jpeg;base64,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"
      />
       </Card>
       <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">The.fit way</p>
        <h4 className="text-white font-medium text-large ">Make health easy,one day at a time</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyzo-Em3jTkGzxGHXpZTiC1AvkybNAi3r-0DWJGTMyegdqBJHGDjeqrkIR0PYdwXKAxU&usqp=CAU"
      />
       </Card>
       <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Workout gear</p>
        <h4 className="text-white font-medium text-large ">everything you need for your workout</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://static.thehoneycombers.com/wp-content/uploads/sites/6/2020/03/mens-activewear-Hong-Kong.jpg"
      />
       </Card>
       <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">sugar.fit</p>
        <h4 className="text-white font-medium text-large ">Reverse type 2 diabetes and prediabetes</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover "
        src="data:image/png;base64,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"
      />
       </Card>    

       </div>
       </div>

 
 </div>


   </div>
   </div>
        
    )
}
export default Home;






































