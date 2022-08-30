// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testmonials from './testmonials'  
import abouts from './abouts'    
import brands from './brands'  
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import works from './works'                                                                                                                                                                                                                                                                                                 
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    testmonials,
    abouts,
    brands,
    experiences,
    skills,
    workExperience,
    works

  ]),
})
