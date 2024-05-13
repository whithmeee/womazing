import Main from "@/components/Main/Main";
import Collection from "@/components/Collection/Collection";
import Forus from "@/components/ForUs/Forus";
import Womazing from "@/components/Womazing/Womazing";

export default function Home() {
    return (
        <>
            <section>
                <Main />
            </section>

            <section>
                <Collection />
            </section>

            <section>
                <Forus />
            </section>

            <section>
                <Womazing />
            </section>
        </>
    );
}
