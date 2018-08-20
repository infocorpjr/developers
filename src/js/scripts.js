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

let svgElement = document.querySelector('.radial__tree');

/**
 *
 * @param x
 * @param y
 * @returns {number[]}
 */
function radialPoint(x, y) {
    return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

/**
 *
 * @param data
 */
function render(data) {
    var root = radialTree(s(data));
    var link = radialG.selectAll(".radial__link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "radial__link")
        .attr("d", d3.linkRadial()
            .angle(function (d) {
                return d.x;
            })
            .radius(function (d) {
                return d.y;
            }));
    var node = radialG.selectAll(".radial__node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function (d) {
            return "radial__node" + (d.children ? " radial__node--internal" : " radial__node--leaf");
        })
        .attr("transform", function (d) {
            return "translate(" + radialPoint(d.x, d.y) + ")";
        });
    node.append("circle").attr("r", 2.5);
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", function (d) {
            return d.x < Math.PI === !d.children ? 6 : -6;
        })
        .attr("text-anchor", function (d) {
            return d.x < Math.PI === !d.children ? "start" : "end";
        })
        .attr("transform", function (d) {
            return "rotate(" + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ")";
        })
        .text(function (d) {
            return d.id.substring(d.id.lastIndexOf(".") + 1);
        });
}

/**/
if (svgElement) {
    var radial = d3.select(svgElement);
    var w = radial.attr("width");
    var h = radial.attr("height");
    var radialG = radial.append("g").attr("transform", "translate(" + (w / 2 - 50) + "," + (h / 2 - 70) + ")");
    var s = d3.stratify()
        .parentId(function (d) {
            return d.id.substring(0, d.id.lastIndexOf("."));
        });
    var radialTree = d3.tree()
        .size([2 * Math.PI, 512])
        .separation(function (a, b) {
            return (a.parent == b.parent ? 1 : 2) / a.depth;
        });
    d3.csv("flare.csv").then(render);
}

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