import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";

const Slider = () => {
    const slides = [
        {
            id: "k1",
            value: 1,
            title: "Wprowadzenie do Linuxa",
            content:
                "Linux to otwarty system operacyjny oparty na jądrze Linux. Jest to jedna z najpopularniejszych platform wśród programistów, administratorów systemów i entuzjastów technologii.",
            img: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
        },
        {
            id: "k2",
            value: 2,
            title: "Historia Linuxa",
            content:
                "Linux został stworzony przez Linusa Torvaldsa w 1991 roku. Rozpoczął jako projekt hobbystyczny, ale szybko zyskał popularność i stał się fundamentem wielu dystrybucji, takich jak Ubuntu, Fedora czy Debian.",
            img: "https://cdn.pixabay.com/photo/2020/04/24/20/27/computer-5088593_1280.jpg",
        },
        {
            id: "k3",
            value: 3,
            title: "Architektura Linuxa",
            content:
                "Jądro Linuxa zarządza zasobami sprzętowymi komputera i umożliwia interakcję między oprogramowaniem a sprzętem. Warstwa użytkowa, taka jak powłoka systemowa, biblioteki i aplikacje, jest zbudowana na tym jądrze.",
        },
        {
            id: "k4",
            value: 4,
            title: "Dystrybucje Linuxa",
            content:
                "Istnieje wiele różnych dystrybucji Linuxa, które różnią się od siebie pod względem społeczności, polityki wydawniczej, pakietów oprogramowania i innych czynników. Każda dystrybucja ma swoje zalety i jest dostosowana do różnych zastosowań.",
        },
        {
            id: "k5",
            value: 5,
            title: "Zalety Linuxa",
            content:
                "Linux oferuje wiele zalet, w tym stabilność, bezpieczeństwo, elastyczność i niskie wymagania sprzętowe. Jest również darmowy i otwarty, co oznacza, że ​​każdy może przeglądać, modyfikować i udostępniać jego kod źródłowy.",
        },
        {
            id: "k6",
            value: 6,
            title: "Zastosowania Linuxa",
            content:
                "Linux znajduje zastosowanie w różnych dziedzinach, od serwerów internetowych po urządzenia wbudowane, smartfony i superkomputery. Jest także popularnym wyborem dla programistów i naukowców zajmujących się obliczeniami naukowymi.",
        },
        {
            id: "k7",
            value: 7,
            title: "Społeczność Linuxa",
            content:
                "Społeczność Linuxa skupia się na wolnym dostępie do oprogramowania, współpracy i wzajemnej pomocy. Dzięki temu modelowi wielu programistów na całym świecie pracuje nad rozwojem i doskonaleniem systemu.",
        },
        {
            id: "k8",
            value: 8,
            title: "Narzędzia programistyczne w Linuxie",
            content:
                "Linux oferuje bogaty zestaw narzędzi programistycznych, takich jak kompilatory, debuggery, edytory kodu i biblioteki. Jest to idealne środowisko do tworzenia oprogramowania open source oraz aplikacji webowych i mobilnych.",
        },
        {
            id: "k9",
            value: 9,
            title: "Przyszłość Linuxa",
            content:
                "Przyszłość Linuxa wydaje się obiecująca, ponieważ rozwija się w wielu kierunkach, obejmujących chmurę obliczeniową, sztuczną inteligencję, Internet rzeczy i wiele innych obszarów. Jego elastyczność i otwartość pozwalają mu przystosowywać się do zmieniających się potrzeb i technologii.",
        },
    ];

    const [slide, setSlide] = useState(1);
    const [scrollPos, setScrollPos] = useState(0);
    const ref = useRef();

    useEffect(() => {}, [slides]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSlide(e.target.value);
        document.querySelector(`#s${e.target.value}`).scrollIntoView();
    };

    const handleScroll = () => {
        setSlide(ref.current.scrollLeft / ref.current.offsetWidth + 1);
    };

    return (
        <div className="relative h-dvh w-full">
            {/* below add no-scrollbar class */}
            <div
                className="no-scrollbar flex h-full w-full snap-x snap-mandatory flex-row flex-nowrap items-center justify-start overflow-x-scroll scroll-smooth"
                ref={ref}
                onScroll={handleScroll}
            >
                {slides.length > 0 &&
                    slides.map((e) => (
                        <Slide
                            img={e.img}
                            title={e.title}
                            content={e.content}
                            key={e.id}
                            id={e.value}
                        />
                    ))}
            </div>
            <div className="navigation absolute bottom-4 left-[50%] flex -translate-x-[50%] flex-row items-center justify-center gap-4 text-white">
                {slides.map((e) => (
                    <label key={e.id} className={`nav cursor-pointer`}>
                        <input
                            className="radio collapse absolute"
                            type="radio"
                            value={e.value}
                            checked={slide == e.value}
                            onChange={handleChange}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Slider;
