import Project from "@/sections/project/Project"
import InfoModal from "@/sections/info_modal/InfoModal"

export default function Home() {
    return <><Project></Project>
        <InfoModal title="Ви точно хочете вийти?" text="Ми будемо сумувати за вами!" confirmButtonText="Відмінити" cancelButtonText="Вийти" ></InfoModal></>
}