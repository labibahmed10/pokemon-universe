import Image from "next/image";

import img1 from "../assets/Image03.png";
import img2 from "../assets/Image04.png";
import img3 from "../assets/Image05.png";
import img5 from "../assets/Image01.png";
import img4 from "../assets/Image02.png";

const Univ_blog = () => {
   return (
      <section className="grid lg:grid-cols-7 text-justify lg:gap-5 gap-2 lg:mx-60 lg:my-20 my-10 font-semibold leading-5 mx-5">
         {/* top */}
         <p className="lg:col-span-3 lg:row-span-1 row-span-2 col-span-5">
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a
            aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc.
            Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper
            ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
            Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis sit maecenas
            sodales mi convallis justo aliquam. Tincidunt semper ut ornare vivamus lectus.
         </p>

         {/* top pic*/}
         <Image
            alt=""
            src={img1}
            className="lg:row-span-2 lg:row-start-1 lg:col-start-4 col-start-2 row-start-4 row-span-2 object-fill h-full"
         />
         {/* top pic*/}

         <p className="lg:col-span-3 hidden lg:block">
            Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a
            aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc.
            Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper
            ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
            Vitae pulvinar sed viverra .
         </p>
         {/* top */}

         {/* mid left */}
         <p className="lg:col-span-2 lg:row-span-2 hidden lg:block">
            Lorem ipsum dolor sit amet consectetur. Turpis integer massa consectetur sed
            enim quis viverra. Vestibulum eu nibh dolor semper. Nisl feugiat quis nec odio
            pulvinar feugiat velit. Nulla massa sit morbi morbi. Tortor viverra eget lacus
            feugiat. Tempus vitae vitae orci at ultrices nisi diam faucibus. Ultricies in
            cursus volutpat aliquam turpis urna in sed. Hendrerit arcu sit lectus
            adipiscing egestas semper nunc. Ante consectetur id congue pulvinar libero
            tristique et orci. Platea convallis dictum dui augue. Tincidunt mattis urna
            sit semper sed duis feugiat mi.
         </p>
         <Image
            alt=""
            className="lg:row-span-2 lg:col-start-3 lg:row-start-2 col-start-3 row-start-3 row-span-2 object-fill h-full"
            src={img2}
         />
         {/* mid left */}

         {/* mid right */}
         <Image
            alt=""
            className="lg:row-span-2 lg:col-start-5 lg:row-start-2 col-start-4 row-start-3 object-fill h-full"
            src={img3}
         />
         <p className="lg:col-span-2 lg:row-span-2 hidden lg:block">
            Lorem ipsum dolor sit amet consectetur. Turpis integer massa consectetur sed
            enim quis viverra. Vestibulum eu nibh dolor semper. Nisl feugiat quis nec odio
            pulvinar feugiat velit. Nulla massa sit morbi morbi. Tortor viverra eget lacus
            feugiat. Tempus vitae vitae orci at ultrices nisi diam faucibus. Ultricies in
            cursus volutpat aliquam turpis urna in sed. Hendrerit arcu sit lectus
            adipiscing egestas semper nunc. Ante consectetur id congue pulvinar libero
            tristique et orci. Platea convallis dictum dui augue. Tincidunt mattis urna
            sit semper sed duis feugiat mi.Ante consectetur id congue{" "}
         </p>
         {/* mid right */}

         {/* center mid*/}
         <p className="lg:col-span-3 hidden lg:block">
            Lorem ipsum dolor sit amet consectetur. Tincidunt at cras tortor non volutpat
            quisque facilisis. Ultricies consequat sed vitae ac. Nisl eu nam id lectus
            tellus sit egestas. Orci iaculis et vehicula nisi facilisi neque lorem. In
            vulputate feugiat lobortis eros viverra. Turpis viverra vel fames enim tortor.
            Scelerisque dictumst aliquam gravida eget ut accumsan. A est dis platea vitae
            blandit quis. Ultricies ac at urna vel morbi diam. Donec ut sit sit et. Etiam
            cum faucibus eu elementum ut fermentum in cursus.{" "}
         </p>

         {/* center mid pic */}
         <Image
            alt=""
            className="lg:col-start-4 lg:row-span-2 lg:row-start-3 col-start-3 row-start-5 row-span-3 object-fill h-full"
            src={img4}
         />
         {/* center mid pic */}

         {/* bottom right pic */}
         <Image
            alt=""
            className="row-span-2 lg:col-start-5 col-start-4 lg:row-start-4 row-start-5 object-fill h-full"
            src={img5}
         />
         {/* bottom right pic */}

         <p className="lg:col-span-2 lg:row-span-2 col-span-5 row-span-2">
            Lorem ipsum dolor sit amet consectetur. Tincidunt at cras tortor non volutpat
            quisque facilisis. Ultricies consequat sed vitae ac. Nisl eu nam id lectus
            tellus sit egestas. Orci iaculis et vehicula nisi facilisi neque lorem. In
            vulputate feugiat lobortis eros viverra. Turpis viverra vel fames enim tortor.
            Scelerisque dictumst aliquam gravida eget ut accumsan. A est dis platea vitae
            blandit quis. Ultricies ac at urna vel morbi diam.
            <br />
            Donec ut sit sit et. Etiam cum faucibus eu elementum ut fermentum in cursus.
            Ante consectetur id congue Ante consectetur id congue
         </p>
         {/* center mid*/}

         <p className="lg:col-span-4 lg:row-span-3 lg:col-start-1 hidden lg:block">
            At a enim parturient id. Suspendisse ullamcorper fermentum accumsan diam
            tellus. Nibh pretium ultrices scelerisque dolor at etiam lectus gravida sed.
            Sit in turpis suspendisse et aliquam. Vulputate sit phasellus proin eget arcu.
            Enim nec ante velit erat nibh nunc amet. Tellus at sit imperdiet non. Cras
            dictum curabitur urna mauris in.
            <br />
            Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id etiam vitae
            non posuere tristique. Morbi sit mi sed nam amet tristique tellus. Sed quam
            aliquam pharetra nunc ipsum mattis. Volutpat pellentesque cras euismod
            habitant sit nibh. Dictum odio at aliquam sed. Orci odio lacinia id sem sed
            suspendisse mi fringilla purus. Quis sed ultricies ac nullam odio. Gravida
            sollicitudin viverra ornare pretium etiam tortor imperdiet tellus. Id purus
            etiam nunc hendrerit quam in. Dui netus lectus nulla cursus ultrices nulla.
            Morbi sit in gravida fermentum. <br /> Non sed lobortis amet eget sed donec.At
            a enim parturient id. Suspendisse ullamcorper fermentum accumsan diam tellus.
            Nibh pretium ultrices scelerisque dolor at etiam lectus gravida sed. Sit in
            turpis suspendisse et aliquam. Vulputate sit phasellus proin eget arcu. Enim
            nec ante velit erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
            curabitur urna mauris in. Ut dui odio sagittis ut imperdiet ultricies mauris
            ac. A sit id etiam vitae non posuere tristique. Morbi sit mi sed nam amet
            tristique tellus. Sed quam aliquam pharetra nunc ipsum mattis. Volutpat
            pellentesque cras euismod habitant sit nibh. Dictum odio at aliquam sed. Orci
            odio lacinia id sem.
         </p>
         <p className="lg:col-span-3 lg:row-span-2 hidden lg:block">
            At a enim parturient id. Suspendisse ullamcorper fermentum accumsan diam
            tellus. Nibh pretium ultrices scelerisque dolor at etiam lectus gravida sed.
            Sit in turpis suspendisse et aliquam. At a enim parturient id. Suspendisse
            ullamcorper fermentum accumsan diam tellus. <br /> Nibh pretium ultrices
            scelerisque dolor at etiam lectus gravida sed. Sit in turpis suspendisse et
            aliquam. Vulputate sit phasellus proin eget arcu. Enim nec ante velit erat
            nibh nunc amet. Tellus at sit imperdiet non. Cras dictum curabitur urna mauris
            in. Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id etiam
            vitae non posuere tristique. Morbi sit mi sed nam amet tristique tellus. Sed
            quam aliquam pharetra.
         </p>
      </section>
   );
};

export default Univ_blog;
