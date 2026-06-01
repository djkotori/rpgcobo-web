import { promises as pfs } from 'fs';
import { parse } from "@textlint/markdown-to-ast";

const cdir = process.cwd() + "/src/assets";

export async function getStaticPaths() {
	let readdir = async (path, prefix, list) => {
		let a = await pfs.readdir(path);
		for( let v of a) {
			let stat = await pfs.stat(path + "/" + v);
			if (stat.isDirectory()) {
				await readdir(path + "/" + v, prefix + v + "/", list);
			} else {
				if( !v.endsWith(".md")) continue;
				list.push({ params: { path: prefix + v + ".json" } });
			}
		}
		return list;
	};
	const list = await readdir( cdir, "", []);
	return list;
}

function shapeup( t){
	delete t.loc;
	delete t.raw;
	if( t.children) for( let c of t.children){
		shapeup( c);
	}
}

export async function GET({ params, request }) {
	const str = await pfs.readFile( cdir + "/" + (params.path.slice( 0, params.path.length-5)), 'utf8');
	var AST = parse( str);
	shapeup( AST);

	return new Response(
		JSON.stringify({
			result: "OK",
			ast: AST,
			raw: str,
		}, null, "\t"),
	);
}
