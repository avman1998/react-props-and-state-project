import Card from "./components/card.js";
// import "./cssFiles/app.css";
function App() {
  return (
    <>
      <h1 class="text-center text-[200%] font-semibold my-[20px]">
        Aman's Store
      </h1>
      <div class="flex flex-row flex-wrap justify-center items-center min-h-[100vh]">
        <Card
          img="https://www.jiomart.com/images/product/420x420/492574062/realme-rmnb1001-book-laptop-11th-gen-intel-core-i3-1115g4-8gb-256gb-ssd-intel-uhd-graphics-windows-10-mso-ultra-hd-35-56-14-inch-digital-o492574062-p590947504-0-202112142213.jpeg"
          name="Realme RMNB1001 Book Laptop"
          price="₹ 38990.00"
        />
        <Card
          img="https://www.jiomart.com/images/product/420x420/493178368/samsung-m13-5g-128-gb-6-gb-ram-midnight-blue-mobile-phone-digital-o493178368-p594137338-0-202209281630.jpeg"
          name="Samsung M13"
          price="₹ 13999.00"
        />
        <Card
          img="https://www.jiomart.com/images/product/420x420/491895011/oneplus-108-cm-43-inch-full-hd-smart-led-tv-43y1-digital-o491895011-p590034845-0-202204082038.jpeg"
          name="ONEPLUS 108 cm"
          price="₹ 22999.00"
        />
        <Card
          img="https://www.jiomart.com/images/product/420x420/492850314/asus-bv322ws-vivobook-14-laptop-10th-gen-intel-core-i3-1005g1-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-mso-hd-35-56-cm-14-inch-digital-o492850314-p592147885-0-202206220227.jpeg"
          name="Asus BV322WS VivoBook"
          price="₹ 29990.00"
        />
        <Card
          img="https://www.jiomart.com/images/product/420x420/491935954/all-new-amazon-echo-dot-4th-gen-digital-o491935954-p590441415-0-202112070933.jpeg"
          name="All-new Amazon Echo Dot (4th Gen)"
          price="₹ 2449.00"
        />
        <Card
          img="https://www.jiomart.com/images/product/420x420/491503417/mi-home-security-camera-digital-o491503417-p590045677-0-202010110622.jpeg"
          name="MI Home Security Camera"
          price="₹ 2799.00"
        />
      </div>
    </>
  );
}

export default App;
