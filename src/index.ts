import yaml from "yaml";
import fs from "node:fs";
import path from "node:path";
import headerCaseNormalizer from "header-case-normalizer";

const formHeaders = (headers: {
  [k: string]: string;
}): { [k: string]: string } =>
  Object.entries(headers).reduce(
    (a, [k, v]) => ({ ...a, [headerCaseNormalizer(k)]: v }),
    {}
  );

export const main = async (spec: string, cmd: string) => {
  const simpleSpec = fs.readFileSync(path.resolve(spec), "utf-8");
  const parsed = yaml.parse(simpleSpec);

  const req = parsed.endpoints[cmd];

  const res = await fetch([req.url, req.path].join(""), {
    headers: formHeaders(req.headers),
    method: req.method ? req.method : req.body ? "POST" : "GET",
  }).then((d) => d.json());

  console.log(res);
  return parsed;
};

main("examples/simple-spec.yaml", "allCountries");
