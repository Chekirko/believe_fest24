"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. Як я можу зареєструватись на Молодіжний кемп?",
    desc: "Для цього потрібно звернутися до молодіжного керівника своєї церкви, він надасть тобі більш детальну інформацію та зможе зареєструвати тебе",
  },
  {
    title: "2. Хто може зареєструватись та поїхати на кемп?",
    desc: "Реєструватись може молодь, яка належить п'ятидесятницьким церквам Дрогобицького регіону Львівської області. Але, звісно ж, є виключення. Якщо ти з іншого регіону, але дуже хочеш поїхати - звернися до організаторів і ми разом подумаємо, чи можна щось зробити",
  },
  {
    title: "3. Чи є вікові обмеження для участі в заході?",
    desc: "Вікові обмеження є. Мінімальний вік учасників - 14 років. Максимальний - тут немає чіткої границі... Але якщо людина в своїй церкві регулярно відвідує молодіжки і є активним учасником молодіжного служіння, ми готові закрити очі на вік. Для уточнень щодо конкретно вашої ситуації звертайтесь до молодіжного керівника своєї церкви",
  },
  {
    title: "4. Скільки коштує реєстрація і що входить у її вартість?",
    desc: "Вартість реєстрації становить 1500 грн. В неї входить проживання, харчування та участь у всіх заходах фестивалю. Проїзд у вартість не реєстрації не включено... Кожна церква здійснює транспортування власним коштом",
  },
  {
    title: "5. Чи можу я повернути кошти, якщо я передумав їхати?",
    desc: "Все залежить від того, на якому етапі підготовки фесту ти передумаєш їхати... Якщо бюджет вже буде на той час укладено і кошти розподілено, то зробити це буде складно. Певну частину, однак, ймовірно, ти зможеш отримати назад",
  },
  {
    title: "6. Чи можна зареєструватись он-лайн?",
    desc: "На жаль, така опція не передбачена... Реєстрація відбувається тільки безпосередньо у вашого молодіжного керівника",
  },
  {
    title: "7. Чи є певний дрес-код для зібрань?",
    desc: "Все повинно бути пристойно, як личить християнам. Ви ж самі все знаєте... що тут вам казати? ))",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Є питання? Спробуй знайти відповіді на них трохи нижче!
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Вітаємо в розділі найпоширеніших запитань Молодіжного кемпу &quot;Я
            вірю!&quot; Ми раді відповісти на всі твої запитання і надати тобі
            всю важливу інформацію щодо кемпу. Якщо в тебе залишаються якісь
            питання - ти можеш
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <AccordionHeader
                className="text-left text-gray-900"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
