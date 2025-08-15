export function getAosAttributes(block) {
  const allowedAosKeys = [
    'animation',
    'duration',
    'easing',
    'offset',
    'anchor',
    'delay',
    'anchorPlacement',
  ];

  const aosAttrs = {};

  const animationConfig = block.animation || {};

  for (const key of allowedAosKeys) {
    if (animationConfig[key] != null) {
      // camelCase a kebab-case (anchorPlacement -> anchor-placement)
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      const attrName = key === 'animation' ? 'data-aos' : `data-aos-${kebabKey}`;
      aosAttrs[attrName] = animationConfig[key];
    }
  }
  return aosAttrs;
}