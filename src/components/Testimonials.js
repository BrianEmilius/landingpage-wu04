// src/components/Testimonials.js
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

function Testimonials() {
	return (
		<section className="testimonials">
			<TestimonialCard
				image="https://picsum.photos/200/200?random=1"
				copy="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, maiores odit? Omnis, fuga optio atque accusantium vitae quibusdam. Quo maxime autem minus natus rem dolor dolores vero quis nam cum?" />
			<TestimonialCard
				image="https://picsum.photos/200/200?random=2"
				copy="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, maiores odit? Omnis, fuga optio atque accusantium vitae quibusdam. Quo maxime autem minus natus rem dolor dolores vero quis nam cum?" />
			<TestimonialCard
				image="https://picsum.photos/200/200?random=3"
				copy="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, maiores odit? Omnis, fuga optio atque accusantium vitae quibusdam. Quo maxime autem minus natus rem dolor dolores vero quis nam cum?" />
		</section>
	)
}

export default Testimonials;
