<div class="masonry-grid-item">
  <% if $Renderer.LinkImages %><a $MetaImageLinkAttributesHTML><% end_if %>
  <% with $getMetaImageResized($Renderer.ImageResizeWidth, $Renderer.ImageResizeHeight, $Renderer.ImageResizeMethod) %>
    <img src="$URL" alt="$Title">
  <% end_with %>
  <% if $Renderer.LinkImages %></a><% end_if %>
</div>
