import { ScrollContainer } from "react-indiana-drag-scroll";
import { Categories } from "@/components/Filters/Categories/Categories";

export const Filters = () => (
  <form
    action=""
    autoComplete="off"
  >
    <section>
      <h2>Filtrar por categorias.</h2>

      <Categories />

      <div></div>
    </section>
  </form>
);
