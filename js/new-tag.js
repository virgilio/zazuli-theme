jQuery(document).ready(function() {

    function zazuTagPost(button, postId, tags) {
        jQuery.ajax({
            url: ajaxAdmin.adminUrl,
            data: {
                action: 'zazu_tag_post',
                tags: tags,
                post_ID: postId
            },
        type: 'POST'
        }).done(function(resultado) {
            button.after('<p class="tags-sent">Tags enviadas.</p>');
            zazuReloadTags(postId);
        });
    }
    
    function zazuReloadTags(postId) {
        jQuery.ajax({
            url: ajaxAdmin.adminUrl,
            data: {
                action: 'zazu_load_tags',
                post_ID: postId
            },
            type: 'POST'
        }).done(function(resultado) {
            jQuery('.tags-wrapper').html(resultado);
        });
    }

    jQuery('.add-tags').focus(function() {
        if (jQuery(this).val() === "Tags separadas por vírgulas") {
            jQuery(this).val('');
        }
    });

    jQuery('.add-tags').blur(function() {
        if (jQuery(this).val() === "") {
            jQuery(this).val('Tags separadas por vírgulas');
        }
    });

    jQuery('body').on('click', '.add-tags-send', function(e) {
        e.preventDefault();

        jQuery('.tags-sent').detach();

        var postId = jQuery(this).siblings('.add-tags-post-id').val();
        var tags = jQuery(this).siblings('.add-tags').val();

        zazuTagPost(jQuery(this), postId, tags);
    });
});