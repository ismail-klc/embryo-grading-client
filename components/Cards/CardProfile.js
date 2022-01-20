import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

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
      <div className="relative flex flex-col w-full min-w-0 mt-16 mb-6 break-words bg-white rounded-lg shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full px-4"></div>
            <div className="w-full px-4 mt-20 text-center">
              <div className="flex justify-center py-1 pt-1 lg:pt-1">
                <Clock value={value} />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
              Hoşgeldiniz
            </h3>
            <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
              <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>{" "}
              EMBRİYO SINIFLANDIRMA DESKTEK SİSTEMİ
            </div>
          </div>
          <div className="py-10 mt-10 text-justify border-t border-blueGray-200">
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
