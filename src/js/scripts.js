// Movimento das barras de destaque.
const el = document.getElementById('featured');
if (el && el.addEventListener) {
    el.addEventListener('mousemove', function (event) {
        document.querySelector('.xtop').style.left = event.pageX - 8 + 'px';
        document.querySelector('.yleft').style.top = event.pageY - 8 + 'px';
    }, false);
} else if (el && el.attachEvent) {
    el.attachEvent('onmousemove', function (event) {
        document.querySelector('.xtop').style.left = event.pageX - 8 + 'px';
        document.querySelector('.yleft').style.top = event.pageY - 8 + 'px';
    });
}

/**
 * D3 js
 */

import * as d3 from 'd3';

// O elemento SVG para renderização da árvore.
let element = document.querySelector('.hierarchy__tree');

var svg = d3.select(element),
    // Obtém o a largura do elemento pai.
    width = element.parentNode.offsetWidth / 1.5,
    // Obtém a altura do elemento pai.
    height = element.parentNode.offsetHeight,
    // Adiciona um grupo para o elemento.
    g = svg.append("g");

// Adiciona o viewBox para o elemento.
g.attr('class', 'hierarchy__tree__group');

var cluster = d3.cluster().size([height, width]);

var stratify = d3.stratify()
    .parentId(function (d) {
        return d.id.substring(0, d.id.lastIndexOf("."));
    });

d3.csv("flare.csv").then(function (data) {
    var root = stratify(data)
        .sort(function (a, b) {
            return (a.height - b.height) || a.id.localeCompare(b.id);
        });

    cluster(root);

    var links = g.selectAll(".hierarchy__tree__link")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class", "hierarchy__tree__link")
        .attr("d", function (d) {
            return "M" + d.y + "," + d.x
                + "C" + (d.parent.y + 100) + "," + d.x
                + " " + (d.parent.y + 100) + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
        });

    var node = g.selectAll(".hierarchy__tree__node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function (d) {
            return "hierarchy__tree__node" + (d.children ? " hierarchy__tree__node--internal" : " hierarchy__tree__node--leaf");
        })
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    node.append("circle")
        .attr("r", 8);

    node.append("text")
        .attr('class', 'hierarchy__tree__text')
        .attr("dy", 3)
        .attr("x", function (d) {
            // return d.children ? -8 : 8;
            return 15
        })
        .attr('y', function (d) {
            return d.children ? -20 : 0;
        })
        .style("text-anchor", function (d) {
            // return d.children ? "end" : "start";
        })
        .text(function (d) {
            return d.id.substring(d.id.lastIndexOf(".") + 1);
        });
});

/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */
import Swiper from 'swiper';

const members = new Swiper('.members__swiper--container', {
    // If we need pagination
    pagination: {
        el: '.members__swiper--pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var texts = ['Management', 'Backend', 'Frontend'];
            return '' +
                '<li class="' + className + '">' +
                '<a href="javascript:void(0)">' + (texts.hasOwnProperty(index) ? texts[index] : (index + 1)) + '</a>' +
                '</li>';
        }
    },
});