PATCH_TARGETS=$(find node_modules/@chakra-ui -name '*.js')
sed -i -e 's/_framerMotion.motion\.\([a-z]*\)/_framerMotion.createDomMotionComponent("\1")/g' $PATCH_TARGETS
sed -i -e 's/ } from "framer-motion";/, createDomMotionComponent } from "framer-motion";/g' $PATCH_TARGETS
sed -i -e 's/chakra(motion.\([a-z]*\)/chakra(createDomMotionComponent("\1")/g' $PATCH_TARGETS
sed -i -e 's/React.createElement(motion.\([a-z]*\)/React.createElement(createDomMotionComponent("\1")/g' $PATCH_TARGETS
sed -i -e 's/flex: 1/flex: "1 1 auto"/g' $PATCH_TARGETS
sed -i -e 's/flex: 0/flex: "0 1 auto"/g' $PATCH_TARGETS
