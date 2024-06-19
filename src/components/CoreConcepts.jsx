import { CoreConcept } from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
export const CoreConcepts = () => {
    return (
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key ={conceptItem.title} {...conceptItem} />
              
            ))}
            {/* <CoreConcepts 
            {...CORE_CONCEPTS[0]}/>
            <CoreConcepts
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description} 
            image = {CORE_CONCEPTS[1].image}/>
            <CoreConcepts 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcepts
            {...CORE_CONCEPTS[3]}/>  */}
          </ul> 
        </section>
    )
}