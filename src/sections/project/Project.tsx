import style from "./_Project.module.scss"
import { createBem } from "@/utils/createBem";
const bem = createBem("project", style)

const Project = () => {
    return (
        <section className={bem()}>
            <div className="container">
                <div className={bem("title_desc")}>
                    <h2 className={bem("title")}>
                        Проєкт, створений для тих,
                        <br />
                        хто живе подорожами
                    </h2>
                    <p className={bem("desc")}>
                        Ми віримо, що кожна подорож — це унікальна історія,
                        варта того, щоб нею поділилися. Наша платформа
                        створена, щоб обʼєднувати людей, закоханих у відкриття
                        нового. Тут ви можете ділитися власним досвідом,
                        знаходити друзів та надихатися на наступні пригоди
                        разом з нами.
                    </p>
                </div>
                <div className={bem("missions")}>
                    <div className={bem("mission")}>
                        <img src="../../../public/afterHero/magic_stick.svg" className={bem("svg")}></img>
                        <h3 className={bem("title2")} > Наша місія</h3>
                        <p className={bem("desc2")}>
                            Обʼєднувати людей через любов до природи та <br />
                            надихати на нові відкриття.
                        </p>
                    </div>

                    <div className="afterHero__mission">
                        <img src="../../../public/afterHero/suitcase.svg" className={bem("svg")}></img>
                        <h3 className={bem("title2")}>Автентичні історії</h3>
                        <p className={bem("desc2")}>
                            Ми цінуємо справжні, неретушовані враження <br />
                            від мандрівників з усього світу.
                        </p>
                    </div>

                    <div className="afterHero__mission">
                        <img src="../../../public/afterHero/people.svg" className={bem("svg")}></img>
                        <h3 className={bem("title2")}>Ваша спільнота</h3>
                        <p className={bem("desc2")}>
                            Станьте частиною спільноти, де кожен може <br />
                            бути і автором, і читачем.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Project;
