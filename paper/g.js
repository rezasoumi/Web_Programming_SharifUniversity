import paper from "paper-jsdom";
import { writeFile } from "fs/promises";

const { Path, Point } = paper;

var size = new paper.Size(300, 300)
paper.setup(size);
var rect = new Path.Rectangle(0, 0, 300, 300);
rect.fillColor = '#ffffff';

// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = '#000000';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start.add([ 100, -50 ]));

var svg = paper.project.exportSVG({asString:true});
await writeFile('result.svg', svg);
