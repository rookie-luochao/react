import { create, formatters } from "jsondiffpatch";
import { Dictionary } from "../../core/router/utils";
import "jsondiffpatch/dist/formatters-styles/html.css";

export function DiffComp({
  oldData,
  newData,
}: {
  oldData: Dictionary<any>;
  newData: Dictionary<any>;
}) {
  if (!oldData || !newData) return <></>;

  const diffPatcher = create({
    textDiff: {
      minLength: 150,
    },
  });
  const delta = diffPatcher.diff(oldData, newData);
  // formatters.html.hideUnchanged();

  return (
    <div dangerouslySetInnerHTML={{ __html: formatters.html.format(delta!, oldData) }} />
  );
}

