/**
 * A simple schema to enforce the nodes in the Slate document.
 *
 * @type {Object}
 */

import { CHILD_REQUIRED, CHILD_TYPE_INVALID } from 'slate-schema-violations'
import {Block, Text} from "slate";


/**
 * 约束：
 * 1. page下面至少一个pageContent
 * 2. 有一个标题
 *
 */
export const schema = {
  blocks: {
    page: {
      nodes: [{ types: ['pageContent'] , min: 1,max :1}],
      normalize: (change, violation, { node, child, index }) => {
        switch (violation) {
          case CHILD_REQUIRED: {
            const block = Block.create({
              type: "pageContent",
              data: {
                pageMargin:[20,15]
              },
              nodes: [
                Text.create("Some text sheetTitle.")
              ]
            })
            return change.insertNodeByKey(node.key, index, block)
          }
        }
      }
    }
  },
  /*document: {
    nodes: [
      { types: ['page'], min: 1 }
    ],
    normalize: (change, violation, { node, child, index }) => {
      switch (violation) {
        case CHILD_REQUIRED: {
          const block = Block.create({
            type: "page",
            data: {
              pageIndex:0,
              pageType:"A4",
              pageWidth:210,
              pageHeight:297
            },
            nodes: [
              Block.create({
                type: "pageContent",
                data: {
                  pageMargin:[20,15]
                },
                nodes: [
                  Text.create("Some text sheetTitle.")
                ]
              })
            ]
          })
          return change.insertNodeByKey(node.key, index, block)
        }
      }
    },
  },*/
}