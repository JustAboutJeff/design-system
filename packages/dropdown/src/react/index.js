// TODO: maybe? back the visible ui with a native select that an be submitted with <form target=?? /> browser submission
import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const dropdownHtmlPropsWhitelist = [
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  buttonSizer: _ => glamor.css(css['.psds-dropdown__button-sizer']),
  error: _ => glamor.css(css['.psds-dropdown__error']),
  field: ({ appearance, icon, themeName }) =>
    glamor.css(
      css['.psds-dropdown__field'],
      css[`.psds-dropdown__field--appearance-${appearance}`],
      css[`.psds-dropdown__field.psds-theme--${themeName}`],
      { ':focus': css['.psds-dropdown__field:focus'] }
    ),
  fieldContainer: ({ error, themeName }, { isFocused }) =>
    glamor.css(
      css['.psds-dropdown__field-container'],
      error
        ? {
            ':before': {
              ...css['.psds-dropdown__field-container--error:before'],
              ...css[
                `.psds-dropdown__field-container--error.psds-theme--${themeName}:before`
              ]
            },
            ':after': css['.psds-dropdown__field-container--error:after']
          }
        : null,
      isFocused
        ? {
            ':before': {
              ...css['.psds-dropdown__field-container:focus:before'],
              ...css[
                `.psds-dropdown__field-container.psds-theme--${themeName}:focus:before`
              ]
            },
            ':after': css['.psds-dropdown__field-container:focus:after']
          }
        : null
    ),
  icon: ({ appearance, icon, themeName }) =>
    glamor.css(
      css['.psds-dropdown__icon'],
      css[`.psds-dropdown__icon--appearance-${appearance}`],
      css[`.psds-dropdown__icon.psds-theme--${themeName}`]
    ),
  dropdown: ({ disabled }) =>
    glamor.css(
      css['.psds-dropdown'],
      disabled && css['.psds-dropdown--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-dropdown__label'],
      css[`.psds-dropdown__label.psds-theme--${themeName}`]
    ),
  menu: _ => glamor.css(css['.psds-dropdown__menu']),
  placeholder: _ => glamor.css(css['.psds-dropdown__placeholder']),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-dropdown__sub-label'],
      css[`.psds-dropdown__sub-label.psds-theme--${themeName}`]
    )
}

const CaretDown = _ => (
  <svg
    role="img"
    aria-label="caret down icon"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 14L8 10h9z" />
  </svg>
)

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      isOpen: this.props.open,
      selectedLabel: null
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleToggleOpen = this.handleToggleOpen.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  handleToggleOpen(evt) {
    this.setState(_ => ({ isOpen: !this.state.isOpen }))
    if (typeof this.props.onClick === 'function') this.props.onClick(evt)
  }
  handleFocus() {
    this.setState(_ => ({ isFocused: true }))
  }
  handleBlur() {
    this.setState(_ => ({ isFocused: false }))
  }
  handleKeyDown(evt) {
    console.log('label key', evt.key)
    if (evt.key === 'ArrowDown') {
      this.setState(_ => ({ isOpen: true }))
    }
  }
  handleMenuClick(evt) {
    // TODO: handle divider??
    this.setState({ selectedLabel: evt.target.innerText, isOpen: false })
  }
  getLongestMenuLabelState() {
    const actionMenu = React.Children.toArray(this.props.menu)[0]
    const longestState = actionMenu
      ? React.Children.toArray(actionMenu.props.children).reduce(
          (longestState, item) => {
            // NOTE: only works if it's a string -- are there valid cases where actionMenuItem child is not a string
            const label = React.Children.toArray(item.props.children)[0]
            if (label.length > longestState.label.length) {
              return { hasIcon: !!item.props.icon, label }
            } else {
              return longestState
            }
          },
          { hasIcon: false, label: '' }
        )
      : 0
    return longestState
  }
  render() {
    const { context, props, state } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    const longestMenuItemState = this.getLongestMenuLabelState()
    return (
      <label
        {...styles.dropdown(allProps)}
        {...(allProps.style ? { style: allProps.style } : null)}
        {...(allProps.className ? { className: allProps.className } : null)}
        onKeyDown={this.handleKeyDown}
      >
        {allProps.label && (
          <div {...styles.label(allProps)}>{allProps.label}</div>
        )}
        <div {...styles.fieldContainer(allProps, state)}>
          <button
            {...propsUtil.whitelistProps(allProps, dropdownHtmlPropsWhitelist)}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            onBlur={allProps.disabled ? null : this.handleBlur}
            onFocus={allProps.disabled ? null : this.handleFocus}
            onClick={allProps.disabled ? null : this.handleToggleOpen}
            ref={el => {
              this.field = el
              if (typeof allProps.innerRef === 'function') allProps.innerRef(el)
            }}
          >
            <span aria-hidden={true} {...styles.buttonSizer(allProps)}>
              {longestMenuItemState.label || allProps.placeholder}
            </span>
            <span {...styles.placeholder(allProps)}>
              {state.selectedLabel || allProps.placeholder}
            </span>
          </button>
          <div {...styles.icon(allProps)}>
            <Icon>
              <CaretDown />
            </Icon>
          </div>
          {allProps.error && (
            <div {...styles.error(allProps)}>
              <Icon id={Icon.ids.warning} />
            </div>
          )}
        </div>
        {allProps.subLabel && (
          <div {...styles.subLabel(allProps)}>{allProps.subLabel}</div>
        )}
        {props.menu &&
          state.isOpen && (
            <div {...styles.menu(allProps)}>
              {React.cloneElement(props.menu, {
                onClick: allProps.disabled ? null : this.handleMenuClick,
                onClose: _ => {
                  this.setState(_ => ({ isOpen: false }))
                  if (typeof props.menu.props.onClose === 'function')
                    props.menu.props.onClose()
                },
                style: {
                  ...props.menu.props.style,
                  maxWidth: 'none',
                  width: this.field
                    ? this.field.getBoundingClientRect().width
                    : 'auto'
                }
              })}
            </div>
          )}
      </label>
    )
  }
}

Dropdown.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.node,
  menu: PropTypes.element.isRequired,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  open: false
}
Dropdown.contextTypes = {
  themeName: PropTypes.string
}

Dropdown.appearances = vars.appearances

export const appearances = vars.appearances
export default Dropdown
