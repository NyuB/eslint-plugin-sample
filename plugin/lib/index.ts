/**
 * @fileoverview Sample plugin to discover eslint
 * @author NyuB
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
import requireindex from 'requireindex';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireindex(__dirname + "/rules");



