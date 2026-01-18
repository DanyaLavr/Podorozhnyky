type Modifiers = Record<string, boolean | string | number | undefined | null>;
type ClassesMap = Record<string, string>;

const ELEMENT_DIVIDER = "__";
const MODIFIER_DIVIDER = "--";

/**
 * @param block - Назва блока
 * @param classes - Мапа класів для заміни (CSS-modules / препроцесор)
 */
export const createBem = (block: string, classes: ClassesMap = {}) => {
  const getClassName = (className: string) => classes[className] ?? className;

  return (element?: string, modifiers: Modifiers = {}) => {
    const baseName = element ? `${block}${ELEMENT_DIVIDER}${element}` : block;

    const baseClass = getClassName(baseName);
    const classList: string[] = [baseClass];

    for (const [key, value] of Object.entries(modifiers)) {
      if (value === true) {
        classList.push(getClassName(`${baseName}${MODIFIER_DIVIDER}${key}`));
      }

      if (typeof value === "string" || typeof value === "number") {
        classList.push(
          getClassName(`${baseName}${MODIFIER_DIVIDER}${key}-${value}`)
        );
      }
    }

    return classList.join(" ");
  };
};
