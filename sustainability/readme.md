# Sustainability Pages

CMS page and static block guide for Cuayan sustainability pages.

## Common to all CMS Pages

### Layout
```xml
<reference name="head">
     <action method="addCss"><stylesheet>css/sustainablity.css</stylesheet></action>
</reference>
<reference name="top.container">
    <block type="cms/block" name="care.guide.breadcrumbs" >
        <action method="setBlockId">
            <block_id>care_guide_breadcrumbs</block_id>
        </action>
    </block>
</reference>
```
### Breadcrumbs (static block)

Block Title: Care Guide - Breadcrumbs<br/>
Identifier: care_guide_breadcrumbs<br/>
Content: sustainability/breadcrumbs_static_block.html

## Landing Page
Page Title: Care Guide<br/>
URL Key: sustainability/care-guide<br/>
Content File: sustainability/care_guide.html

## Care Guide Material Detail Page Simple
Page Title: Sustainability Care Guide {material}<br/>
URL Key: sustainability/care-guide/{material}<br/>
Content File: sustainability/care_guide_material_simple.html

## Care Guide Material Detail Page Intermediate
Page Title: Care Guide<br/>
URL Key: sustainability/care-guide/alpaca-cashmere-wool<br/>
Content File: sustainability/care_guide_material_intermediate.html

## Repair Page
Page Title: Care Guide - Repair<br/>
URL Key: sustainability/care-guide/repair<br/>
Content File: sustainability/care_guide_repair.html
