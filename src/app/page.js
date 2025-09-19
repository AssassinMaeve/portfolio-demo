import NavBar from "./components/NavBar";

export default function Home(){
    return(
        <main>
            <NavBar/>
            <section className="text- center mt-20">
                <h1 className="pl-70 text-9xl font-bold">MY</h1>
                <h1 className="pl-70 text-9xl font-bold">PORTFOLIO</h1>
                
            </section>
        </main>
    );
}