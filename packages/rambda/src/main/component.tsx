import { debounce } from 'rambdax'
import { 
  AceCell,
  AceContainer,
  Grid, 
  HalfContainer, 
  Label, 
  Log, 
  Result, 
  ResultsGrid, 
  Pre 
} from '../components'

import * as React from 'react'
import AceEditor from 'react-ace-cdn'
import { connect } from 'react-redux'
import { codeChange } from './actions'

function CodeBlock({ code, classNameStatus }) {
  return (<Pre className={classNameStatus}>
    <code className='javascript'>
      {code}
    </code>
  </Pre>)
}

const debouncedCodeChange = debounce(({ dispatch, newValue }) => {
  dispatch(codeChange(newValue))
}, 500)

export class Main extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  public onChange(newValue) {
    debouncedCodeChange({
      dispatch: this.props.dispatch,
      newValue,
    })
  }
  public componentDidCatch(error) {
    console.log(error, 'componentDidCatch')
  }
  public componentDidMount() {
    const currentURL = window.location.href
    const [, codeRaw] = currentURL.split('?')
    if (codeRaw !== undefined) {
      const code = decodeURIComponent(codeRaw)
      this.props.dispatch(codeChange(code))
    }else{
      this.props.dispatch(codeChange(this.props.store.code))
    }
  }
  public render() {

    return (
      <Grid>
        <AceContainer>
          <AceCell>
            <AceEditor
              mode='javascript'
              theme='monokai'
              onChange={this.onChange}
              editorProps={{ $blockScrolling: Infinity }}
              fontSize={15}
              showPrintMargin={false}
              showGutter={false}
              highlightActiveLine={false}
              value={this.props.store.code}
              enableBasicAutocompletion={false}
              enableLiveAutocompletion={false}
              enableSnippets={false}
              showLineNumbers={false}
              focus={true}
              tabSize={2}
            />
          </AceCell>
        </AceContainer>

        <HalfContainer>

          <ResultsGrid>
            <Label>Result is:</Label>
            <div></div>
            <Result>
              <CodeBlock 
                code={this.props.store.result} 
                classNameStatus={this.props.store.classNameStatus} 
              />
            </Result>

            <Label>Console.log:</Label>
            <div></div>
            <Log>
              {this.props.store.logResult.map(
                (singleCode, i) => <div key={i}>
                  <CodeBlock 
                    code={singleCode} 
                    classNameStatus={this.props.store.classNameStatus} 
                  />
                </div>,
              )}
            </Log>

          </ResultsGrid>
        </HalfContainer>
      </Grid>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const MainWrapped = connect(connectComponent)(Main)
