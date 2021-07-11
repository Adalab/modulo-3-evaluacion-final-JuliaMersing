(this["webpackJsonpmy-react-project"] =
  this["webpackJsonpmy-react-project"] || []).push([
  [0],
  {
    15: function (e, t, c) {},
    16: function (e, t, c) {},
    23: function (e, t, c) {},
    24: function (e, t, c) {},
    34: function (e, t, c) {},
    35: function (e, t, c) {},
    36: function (e, t, c) {},
    37: function (e, t, c) {},
    38: function (e, t, c) {},
    39: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(1),
        r = c(17),
        n = c.n(r),
        s = (c(23), c(10)),
        i = function () {
          return fetch(
            "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return e.map(function (e) {
                return {
                  name: e.name,
                  photo: e.image,
                  specie: e.species,
                  id: e.id,
                  planet: e.origin.name,
                  episode: e.episode,
                  status: e.status,
                  gender: e.gender,
                };
              });
            });
        },
        l = (c(24), c(7)),
        d = c(0),
        o = function (e) {
          return Object(d.jsx)(l.b, {
            className: "link character",
            to: "/character/".concat(e.character.id),
            children: Object(d.jsxs)("div", {
              className: "character__card",
              children: [
                Object(d.jsx)("div", {
                  className: "character__card--name",
                  children: Object(d.jsx)("h4", { children: e.character.name }),
                }),
                Object(d.jsx)("img", {
                  className: "character__card--img",
                  src: e.character.photo,
                  alt: e.character.name,
                }),
                Object(d.jsxs)("div", {
                  className: "character__card--info",
                  children: [
                    Object(d.jsx)("p", {
                      className: "character__card--text-info",
                      children:
                        "Human" === e.character.specie
                          ? Object(d.jsx)("i", { class: "far fa-user" })
                          : "Alien" === e.character.specie
                          ? Object(d.jsx)("span", { children: "\ud83d\udc7d" })
                          : void 0,
                    }),
                    Object(d.jsx)("p", {
                      className: "character__card--text-info",
                      children: e.character.gender,
                    }),
                    Object(d.jsx)("p", {
                      className: "character__card--text-info",
                      children:
                        "Dead" === e.character.status
                          ? Object(d.jsx)("i", { class: "fas fa-skull" })
                          : "unknown" === e.character.status
                          ? Object(d.jsx)("i", {
                              title: "Dear or alive...Who knows!",
                              class: "fas fa-question",
                            })
                          : "Alive" === e.character.status
                          ? Object(d.jsx)("i", { class: "fas fa-heartbeat" })
                          : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j =
          (c(34),
          function (e) {
            var t = e.characters.map(function (e) {
              return Object(d.jsx)(o, { character: e }, e.id);
            });
            return Object(d.jsx)("section", {
              children: Object(d.jsx)("ul", {
                className: "cards",
                children: t,
              }),
            });
          }),
        h =
          (c(15),
          function () {
            return Object(d.jsxs)("div", {
              className: "notfound",
              children: [
                Object(d.jsx)("p", {
                  children:
                    "You may have made a typing error. This character does not exist ",
                }),
                Object(d.jsx)("img", {
                  className: "notfoundImg",
                  src: "https://media2.giphy.com/media/3o7TKuAfCHifvPdcxG/200.gif?cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g&cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g",
                  alt: "Character not found",
                }),
                Object(d.jsx)(l.b, {
                  to: "/",
                  children: Object(d.jsx)("button", {
                    className: "pageNot__button",
                    children: "Volver",
                  }),
                }),
              ],
            });
          });
      var u = function () {
          return Object(d.jsxs)("div", {
            className: "notfound",
            children: [
              Object(d.jsx)("p", {
                className: "pageNot__text2 ",
                children:
                  "Oh boy! You must be wrong, this page does not exist!",
              }),
              Object(d.jsx)("img", {
                className: "notfoundImg",
                src: "https://media3.giphy.com/media/AqOioh3rTS0Z3pP6V2/200.gif?cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g&cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g",
                alt: "This page doesn't exist",
              }),
              Object(d.jsx)(l.b, {
                to: "/",
                children: Object(d.jsx)("button", {
                  className: "pageNot__button",
                  children: "Volver",
                }),
              }),
            ],
          });
        },
        b =
          (c(35),
          function (e) {
            return Object(d.jsxs)("div", {
              className: "SingleCharacter",
              children: [
                Object(d.jsxs)("article", {
                  className: "singleCharacterCard",
                  children: [
                    Object(d.jsx)("img", {
                      className: "imageCharacter",
                      src: e.character.photo,
                      alt: e.character.name,
                    }),
                    Object(d.jsxs)("div", {
                      className: "characterDetails",
                      children: [
                        Object(d.jsx)("h4", { children: e.character.name }),
                        Object(d.jsxs)("ul", {
                          children: [
                            Object(d.jsxs)("li", {
                              children: ["Specie: ", e.character.species],
                            }),
                            Object(d.jsxs)("li", {
                              children: ["Planet: ", e.character.planet],
                            }),
                            Object(d.jsxs)("li", {
                              children: [
                                "Episodes: ",
                                e.character.episode.length,
                              ],
                            }),
                            Object(d.jsxs)("li", {
                              children: ["Status: ", e.character.status],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(d.jsx)(l.b, {
                  className: "link",
                  to: "/",
                  children: "Volver",
                }),
              ],
            });
          }),
        f = c.p + "static/media/Rick_and_Morty.de13d484.png",
        m =
          (c(36),
          {
            get: function (e, t) {
              var c = localStorage.getItem(e);
              return null === c ? t : JSON.parse(c);
            },
            set: function (e, t) {
              localStorage.setItem(e, JSON.stringify(t));
            },
          }),
        O =
          (c(37),
          function (e) {
            return Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsx)("label", {
                  className: "form__label",
                  htmlFor: "name",
                  children: "Filter by name:",
                }),
                Object(d.jsx)("input", {
                  className: "form__input",
                  type: "text",
                  name: "name",
                  id: "name",
                  placeholder: "We are waiting...please type a name",
                  value: e.filterName,
                  onChange: function (t) {
                    e.handleFilter({ value: t.target.value, key: "name" });
                  },
                }),
              ],
            });
          }),
        x =
          (c(16),
          function (e) {
            return Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsx)("label", {
                  className: "form__label hidden",
                  htmlFor: "specie",
                  children: "Species:",
                }),
                Object(d.jsxs)("select", {
                  className: "form__select hidden",
                  id: "Specie",
                  name: "Specie",
                  onChange: function (t) {
                    e.handleFilter({ value: t.target.value, key: "specie" });
                  },
                  value: e.filterBySpecie,
                  children: [
                    Object(d.jsx)("option", { value: "All", children: "All" }),
                    Object(d.jsx)("option", {
                      value: "Human",
                      children: "Human",
                    }),
                    Object(d.jsx)("option", {
                      value: "Alien",
                      children: "Alien",
                    }),
                  ],
                }),
              ],
            });
          }),
        p = function (e) {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)("label", {
                className: "form__label hidden",
                htmlFor: "Gender",
                children: "Gender",
              }),
              Object(d.jsxs)("select", {
                className: "form__select hidden",
                id: "Gender",
                name: "Gender",
                onChange: function (t) {
                  e.handleFilter({ value: t.target.value, key: "gender" });
                },
                value: e.filterByGender,
                children: [
                  Object(d.jsx)("option", {
                    value: "Female",
                    children: "Female",
                  }),
                  Object(d.jsx)("option", { value: "Male", children: "Male" }),
                  Object(d.jsx)("option", {
                    value: "Genderless",
                    children: "Genderless",
                  }),
                  Object(d.jsx)("option", {
                    value: "unknown",
                    children: "unknown",
                  }),
                ],
              }),
            ],
          });
        },
        g =
          (c(38),
          function (e) {
            return Object(d.jsx)("section", {
              children: Object(d.jsxs)("form", {
                className: "form__container",
                children: [
                  Object(d.jsx)(O, {
                    filterName: e.filterName,
                    handleFilter: e.handleFilter,
                  }),
                  Object(d.jsx)(x, {
                    filterSpecie: e.filterSpecie,
                    handleFilter: e.handleFilter,
                  }),
                  Object(d.jsx)(p, {
                    filterGender: e.filterGender,
                    handleFilter: e.handleFilter,
                  }),
                ],
              }),
            });
          }),
        v = c(2),
        N = function () {
          var e = Object(a.useState)(m.get("characters", [])),
            t = Object(s.a)(e, 2),
            c = t[0],
            r = t[1],
            n = Object(a.useState)(m.get("filterName", "")),
            l = Object(s.a)(n, 2),
            o = l[0],
            O = l[1],
            x = Object(a.useState)(m.get("filterSpecie", "")),
            p = Object(s.a)(x, 2),
            N = p[0],
            _ = p[1],
            y = Object(a.useState)(m.get("filterGender", "")),
            S = Object(s.a)(y, 2),
            F = S[0],
            k = S[1];
          Object(a.useEffect)(function () {
            0 === c.length &&
              i().then(function (e) {
                r(e);
              });
          }, []),
            Object(a.useEffect)(
              function () {
                m.set("characters", c),
                  m.set("filterName", o),
                  m.set("filterSpecie", N),
                  m.set("filterGender", F);
              },
              [c, o, N, F]
            );
          var C = c
            .filter(function (e) {
              return e.name.toLowerCase().includes(o.toLowerCase());
            })
            .filter(function (e) {
              return (
                "All" === N || e.specie.toLowerCase().includes(N.toLowerCase())
              );
            })
            .filter(function (e) {
              return e.gender.toLowerCase().includes(F.toLowerCase());
            });
          return Object(d.jsxs)("div", {
            className: "page",
            children: [
              Object(d.jsx)("img", { className: "logo", src: f, alt: "Logo" }),
              Object(d.jsxs)(v.c, {
                children: [
                  Object(d.jsx)(v.a, {
                    exact: !0,
                    path: "/",
                    children: Object(d.jsxs)("div", {
                      children: [
                        Object(d.jsx)(g, {
                          filterName: o,
                          filterSpecies: N,
                          handleFilter: function (e) {
                            "name" === e.key
                              ? O(e.value)
                              : "specie" === e.key
                              ? _(e.value)
                              : "gender" === e.key && k(e.value);
                          },
                        }),
                        Object(d.jsx)("ul", {
                          children:
                            C.length > 0
                              ? Object(d.jsx)(j, { characters: C })
                              : Object(d.jsx)(h, {}),
                        }),
                      ],
                    }),
                  }),
                  Object(d.jsx)(v.a, {
                    path: "/character/:characterId",
                    render: function (e) {
                      var t = e.match.params.characterId,
                        a = c.find(function (e) {
                          return e.id === parseInt(t);
                        });
                      if (void 0 !== a)
                        return Object(d.jsx)(b, { character: a });
                    },
                  }),
                  Object(d.jsx)(v.a, { children: Object(d.jsx)(u, {}) }),
                ],
              }),
            ],
          });
        };
      n.a.render(
        Object(d.jsx)(l.a, { children: Object(d.jsx)(N, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[39, 1, 2]],
]);
//# sourceMappingURL=main.432bfd24.chunk.js.map
