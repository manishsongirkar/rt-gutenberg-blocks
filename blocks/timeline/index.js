import './style.scss';
import './editor.scss';

/* Set up variables */
const { __ } = wp.i18n;
const {
		  registerBlockType,
		  RichText,
		  source: { children },
		  InspectorControls
	  } = wp.blocks;

const {
		  SelectControl,
		  TextControl
	  } = wp.components;

/* Register block type */
registerBlockType( 'rt-blocks/timeline', {

	title: __( 'Timeline' ),
	icon: 'editor-table',
	category: 'common',

	attributes: {

		timelineTitle: {
			type: 'array',
			source: 'children',
			selector: '.timeline-title',
		},

		timelineContent : {
			type: 'array',
			source: 'children',
			selector: '.timeline-description',
		},

		releaseType: {
			type: 'select',
			default: 'major'
		},

		newslink: {
			type: 'url',
			selector: '.timeline-news-link',
		},

		bloglink: {
			type: 'url',
			selector: '.timeline-blog-link',
		},

	},

	edit: props => {

		const { focus, attributes: { releaseType, releaseDate, timelineTitle, timelineContent, newslink, bloglink }, className, setFocus } = props;
		const availableTypes = [
			{ value: 'major', label: __( 'Major Release' ) },
			{ value: 'minor', label: __( 'Minor Release' ) },
		];

		/* Event handlers */
		const onChangeType = newreleaseType => {
			props.setAttributes( { releaseType: newreleaseType } );
		};

		const onChangeDate = newreleaseDate => {
			props.setAttributes( { releaseDate: newreleaseDate } );
		};

		const onTitleChange = newtimelineTitle => {
			props.setAttributes( { timelineTitle: newtimelineTitle } );
		};

		const onContentChange = newtimelineContent => {
			props.setAttributes( { timelineContent: newtimelineContent } );
		};

		const onChangenewslink = newnewslink => {
			props.setAttributes( { newslink: newnewslink } );
		};

		const onChangebloglink = newbloglink => {
			props.setAttributes( { bloglink: newbloglink } );
		};

		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'timelineTitle' } ) );
		};

		const onFocusContent = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'timelineContent' } ) );
		};

		return (
			<div className={ className + ' timeline-' + releaseType }>
				{
					!! focus && (
						<InspectorControls key={ 'inspector' }>
							<SelectControl
								type={ 'select' }
								label={ __( 'WordPress Release Type' ) }
								value={ releaseType }
								onChange={ onChangeType }
								options={ availableTypes }
							/>

							<TextControl
								type={ 'date' }
								label={ __( 'Set Release Date' ) }
								value={ releaseDate ? releaseDate : null }
								onChange={ onChangeDate }
							/>

							<TextControl
								type={ 'url' }
								label={ __( 'News article link' ) }
								value={ newslink }
								onChange={ onChangenewslink }
							/>

							<TextControl
								type={ 'url' }
								label={ __( 'Blog article link' ) }
								value={ bloglink }
								onChange={ onChangebloglink }
							/>
						</InspectorControls>
					)
				}

				<div className={ 'timeline-container' }>

					<RichText
						className={ 'timeline-title' }
						tagName={ 'h3' }
						onChange={ onTitleChange }
						value={ timelineTitle }
						focus={ setFocus }
						placeholder={ __( 'Title' ) }
						onFocus={ onFocusTitle }
						inline={ true }
					/>

					<RichText
						tagName={ 'p' }
						className={ 'timeline-description' }
						inline={ true }
						placeholder={ __( 'Enter contributors list here' ) }
						value={ timelineContent }
						onChange={ onContentChange }
						focus={ setFocus }
						onFocus={ onFocusContent }
						aria-autocomplete="list"
					/>
				</div>
			</div>
		);
	},

	save: props => {

		const {
				  className,
				  attributes: {
					  releaseType,
					  releaseDate,
					  timelineTitle,
					  timelineContent,
					  newslink,
					  bloglink
				  }
			  } = props;

		return (
			<div className={ className + ' timeline-' + releaseType }>
				<div className={ 'timeline-container' }>
					{
						releaseDate ? <time className='timeline-date'>{ moment( releaseDate ).local().format( 'MMM, Y' ) }</time> : ''
					}

					<div className="separator"></div>

					<div className="content-wrap">
						<div className="content-inner">
							<h3 className='timeline-title'>
								{ timelineTitle }
								{
									( 'minor' === releaseType ) ? <span>(Minor Release)</span> : ''
								}
							</h3>
							<p className='timeline-description'>
								<strong>{ __( 'Contributers:' ) } </strong>
								{ timelineContent }
							</p>
							<div className='postlinks'>
								{
									newslink ? <a href={ newslink } className='timeline-news-link'>{ __( 'Release Note' ) }</a> : ''
								}
								{
									bloglink ? <a href={ bloglink } className='timeline-blog-link'>{ __( 'Blog Article' ) }</a> : ''
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
