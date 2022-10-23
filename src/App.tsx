import "./App.css"
import "./components/Cta/index.css"
import Cta from "./components/Cta/index"

function App() {
    return (
        <div>
            <section className="container scroll-through">
                <h2>Scroll down</h2>
            </section>
            <Cta
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores deserunt voluptatibus, maxime repudiandae quibusdam et eos autem ratione voluptas."
                backgroundFrom="#4338ca"
                backgroundTo="#9333ea"
            />
            <section className="container scroll-through">
                <h2>Scroll up</h2>
            </section>
        </div>
    )
}

export default App
