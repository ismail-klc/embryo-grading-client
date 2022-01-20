import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

// components

export default function CardProfile() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center"></div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-1 lg:pt-1 pt-1">
                <Clock value={value} />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
              Hoşgeldiniz
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              EMBRİYO SINIFLANDIRMA DESKTEK SİSTEMİ
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Yazılımın hayatımızın her alanına girdiği gibi tıp alanında da
                  hastalıkların teşhisi bakımından büyük bir önem arz
                  etmektedir. Son yıllarda gelişen yapay zeka derin öğrenme ve
                  makine öğrenme teknolojileri yardımıyla teşhislerde daha hızlı
                  sonuçlar elde edilebilmektedir. Bunun gibi sağladığı
                  faydalardan dolayı bu teknolojilerin bu alanlarda kullanılması
                  bir zorunluluk haline gelmiştir. Bu sistemimizin amacı, derin
                  öğrenme yardımıyla tüp bebek tedavisinde embriyo kalitesini
                  belirlemektir. İnsan yerine bilgisayarın karar vereceği bir
                  sistem gerek hata miktarını gerekse de karar verme sürecini
                  olumlu olarak etkileyecektir. Bu yüzden tasarlanan akıllı bir
                  model yardımıyla söz konusu sorunların çözülmesi ve embriyo
                  kalitesinin belirlenmesinde doğru bir derecelendirme yapılması
                  sağlanacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
