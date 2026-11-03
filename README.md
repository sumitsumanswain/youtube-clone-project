- > I build in YouTube Clone is a responsive front-end web application built with HTML5, CSS3 and vanilla JavaScript, with no frameworks.
  
- >  HTML gives the page a semantic structure: header, nav, aside and main. It is split into three parts: navbar, sidebar and video list.
  
- >  CSS is split into three modular files (navbar.css, sidebar.css, main.content.css). The main features are:-
  Flexbox for the navbar, sidebar links and the page layout.
  CSS Grid with repeat(auto-fill, minmax(200px, 1fr)), so the video grid adjusts its column count to the screen size.
  CSS variables (:root) for a consistent color theme.
  Media queries for tablet and mobile layouts, hiding the sidebar on very small screens.
  Positioning: the duration badge (10:03) sits on top of each thumbnail using position: absolute.
  Hover effects on buttons and links, a thin custom scrollbar, and independent scrolling for the sidebar and the video area.

- > JavaScript adds the hamburger menu:
  > it selects elements with querySelector and uses an addEventListener click event with classList.toggle() to show or hide the sidebar.

  Extras: Font Awesome icons and Google Fonts (Roboto).

  
