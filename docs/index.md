---
layout: home
title: "Alon Shoa"
hero_subtitle: "XR researcher, educator, and creative technologist blending AI with immersive storytelling."
cta_primary_label: "View Projects"
cta_primary_url: "/projects/"
cta_secondary_label: "Teaching Hub"
cta_secondary_url: "/teaching/"
lang: en
alt_url_he: "/he/"
---

<p>Hello! Thanks for stopping by. I build experiences at the intersection of speech processing, machine learning, and extended reality. This site will grow into a bilingual hub for projects, teaching resources, research, and live demos.</p>

{% assign latest_project = site.projects | sort: 'date' | reverse | first %}
{% if latest_project %}
<section class="home-section">
  <header class="home-section__header">
    <h2>Latest project</h2>
    <a class="see-all" href="{{ '/projects/' | relative_url }}">Browse projects</a>
  </header>
  <div class="card-list">
    {% include project-card.html item=latest_project %}
  </div>
</section>
{% endif %}

{% assign latest_course = site.courses | sort: 'date' | reverse | first %}
{% if latest_course %}
<section class="home-section">
  <header class="home-section__header">
    <h2>In the classroom</h2>
    <a class="see-all" href="{{ '/teaching/' | relative_url }}">Explore teaching</a>
  </header>
  <div class="card-list">
    {% include course-card.html item=latest_course %}
  </div>
</section>
{% endif %}

{% assign latest_publication = site.publications | sort: 'date' | reverse | first %}
{% if latest_publication %}
<section class="home-section">
  <header class="home-section__header">
    <h2>Recent publication</h2>
    <a class="see-all" href="{{ '/research/' | relative_url }}">See research</a>
  </header>
  <div class="card-list">
    {% include publication-card.html item=latest_publication %}
  </div>
</section>
{% endif %}

<section class="home-section">
  <header class="home-section__header">
    <h2>Bio</h2>
  </header>
  <p>More biographical details will live here once the bilingual layouts land. For now, check back soon.</p>
</section>
